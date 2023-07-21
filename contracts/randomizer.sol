// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "hardhat/console.sol";

contract randomizer{

    mapping(uint=>mapping(uint=>mapping(uint=>bool))) public completed;
    mapping(uint=>mapping(uint=>mapping(uint=>mapping(uint=>uint)))) public store;
    mapping(uint=>mapping(uint=>mapping(uint=>uint))) public last;


    uint[] public players;
    uint public current_season;

    event done (
        uint[5] indexed players,
        uint[5] indexed divisions,
        uint[5] indexed serials
    );

    constructor(uint _current_season){

        current_season = _current_season;
        
    }

    function setPlayers (uint256 start, uint256 end) public {
        for(uint i=start; i<end; i++){
            players.push(i);
            last[i][current_season][0] = 39999;
            last[i][current_season][1] = 9999;
            last[i][current_season][2] = 1999;
            last[i][current_season][3] = 199;
        }
    }
 
    function randomMint(uint randomIndex) public returns (uint, uint, uint) {

        require(players.length>0, "No more cards left for minting");

        uint player_id = uint16((block.timestamp + block.prevrandao + randomIndex) % players.length);
        uint player_chosen = players[player_id];

        uint division_chosen = uint16((block.timestamp + block.prevrandao + randomIndex) % 4);

        // console.log("player %s chosen", player_chosen);
        // console.log("division %s chosen", division_chosen);
        uint replaced = 9999999;
        uint counter = 0;
        while(completed[player_chosen][current_season][division_chosen]==true){
            division_chosen = counter;
            counter+=1;
        }

        uint serial =  uint16((block.timestamp + block.prevrandao + randomIndex) % (last[player_chosen][current_season][division_chosen]+1));
        // console.log("serial %s chosen", serial);

        if(store[player_chosen][current_season][division_chosen][serial]==0){
            console.log("Minted player %s division %s serial %s", player_chosen, division_chosen, serial);
        }
        else{
            console.log("Minted player %s division %s serial %s", player_chosen, division_chosen, store[player_chosen][current_season][division_chosen][serial]);
            replaced = store[player_chosen][current_season][division_chosen][serial];
        }

        store[player_chosen][current_season][division_chosen][serial] = last[player_chosen][current_season][division_chosen];


        if (last[player_chosen][current_season][division_chosen]==0){
            completed[player_chosen][current_season][division_chosen] = true;
            if(
                completed[player_chosen][current_season][0]==true && 
                completed[player_chosen][current_season][1]==true && 
                completed[player_chosen][current_season][2]==true &&
                completed[player_chosen][current_season][3]==true 
            ){
                
                players[player_chosen] = players[players.length-1];
                players.pop();
            }
        }
        else{
            last[player_chosen][current_season][division_chosen] -=1;
        }
        
        if (replaced==9999999) {
            return(player_chosen,division_chosen,serial);
        }
        else{
            return(player_chosen, division_chosen, replaced);
        }
        // console.log("process completed");
        
    }

    function buy(uint randomIndex) public  {
        // uint[5] memory player; 
        // uint[5] memory division; 
        // uint[5] memory serial;

        // uint p;
        // uint d;
        // uint s;

        // (p,d,s) = randomMint(randomIndex+3);
        // player[0] = p;
        // division[0] = d;
        // serial[0] = s;

        // (p,d,s) =randomMint(randomIndex+2);
        // player[0] = p;
        // division[0] = d;
        // serial[0] = s;
        // (p,d,s) =randomMint(randomIndex+5);
        // player[0] = p;
        // division[0] = d;
        // serial[0] = s;
        // (p,d,s) =randomMint(randomIndex+1);
        // player[0] = p;
        // division[0] = d;
        // serial[0] = s;
        // (p,d,s) =randomMint(randomIndex+4);
        // player[0] = p;
        // division[0] = d;
        // serial[0] = s;

        // emit done(player, division, serial);
        randomMint(randomIndex+2);
        randomMint(randomIndex+5);
        randomMint(randomIndex+1);
        randomMint(randomIndex+3);
        randomMint(randomIndex+4);
        
        
    }
}
