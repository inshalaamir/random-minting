// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;


// ERC 721 protocol for nfts. 
//ERC721URISTORAGE for getting and storing uris of tokens.
//ERC721 burnable for adding the burning functionality for fusion.
//ERC721 Ownable for access control
//ERC721 counters for incremental counter for token ids
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract minimal is ERC721, ERC721Burnable, Ownable {
    using Counters for Counters.Counter;

    Counters.Counter private _cardIdCounter;
    Counters.Counter private _playerIdCounter;
    Counters.Counter private _clubIdCounter;
    Counters.Counter private _itemIdCounter;

    struct Player {
        // The name of the actual football player
        string name;
        // The year of birth of the actual football player.
        uint16 yearOfBirth;
        // The month of birth of the actual football player.
        // January is 1.
        uint8 monthOfBirth;
        // The day of birth of the actual football player.
        uint8 dayOfBirth;
    }

    struct Club {
        // Name of the club, leave blank for national team
        string name;
        // Country of the club or national team
        string country;
        // City of the club, leave blank for national team
        string city;
        // Year founded of the club, leave blank for national team
        uint16 yearFounded;
    }

    struct Card {
        // The id of the football Player
        uint256 playerId;
        /// @dev Contains the immutable metadata hash for each card.The IPFS address can be computed
        /// like so base58('1220' + hex(value))
        string metadata;
        // The football season represented by the first year of the season: Season 2018/2019 is 2018.
        uint16 season;
        // Card serial number
        uint16 serialNumber;
        // Card scarcity
        uint8 division;
        // Id of the football club
        uint16 clubId;
    }

    struct Item {
        string name;
        uint16 multiplier;
    }

    mapping(uint256 => Player) public players;
    mapping(uint256 => Club) public clubs;
    mapping(uint256 => Card) public cards;
    mapping(uint256 => Item) public items;

    constructor() ERC721("minimal", "MIN") {}

    function createPlayer(
        string calldata name,
        uint16 yearOfBirth,
        uint8 monthOfBirth,
        uint8 dayOfBirth
    ) public onlyOwner returns (uint256){
        uint256 playerId = _playerIdCounter.current();
        _playerIdCounter.increment();
        Player memory player = Player({
            name: name,
            dayOfBirth: dayOfBirth,
            monthOfBirth: monthOfBirth,
            yearOfBirth: yearOfBirth
        });

        players[playerId] = player;
        return playerId;
    }

    function createClub(
        string calldata name,
        string calldata country,
        string calldata city,
        uint16 yearFounded
    ) public onlyOwner returns (uint256) {
        uint256 clubId = _clubIdCounter.current();
        _clubIdCounter.increment();
        Club memory club = Club({
            name: name,
            country: country,
            city :city,
            yearFounded: yearFounded
        });

        clubs[clubId] = club;
        return clubId;
    }

    function getPlayer(uint256 playerId) public view
        returns (
            string memory name,
            uint16 yearOfBirth,
            uint8 monthOfBirth,
            uint8 dayOfBirth
        )
    {
        Player storage p = players[playerId];
        name = p.name;
        yearOfBirth = p.yearOfBirth;
        monthOfBirth = p.monthOfBirth;
        dayOfBirth = p.dayOfBirth;
    }

    function getclub(uint256 clubId) public view returns (
            string memory name,
            string memory country,
            string memory city,
            uint16 yearFounded
        )
    {
        Club storage c = clubs[clubId];
        name = c.name;
        country = c.country;
        city = c.city;
        yearFounded = c.yearFounded;
    }

    function playerExists(uint256 playerId) public view returns(bool) {
        Player storage player = players[playerId];
        return player.yearOfBirth > 0;
    }

    // prettier-ignore
    function clubExists(uint16 clubId) public view returns (bool) {
        Club storage club = clubs[clubId];
        return club.yearFounded > 0;
    }

    function createItem(
        string calldata name,
        uint16 multiplier 
    ) public onlyOwner returns (uint256){
        Item memory item;
        item.name = name;
        item.multiplier= multiplier;

        uint256 itemId = _cardIdCounter.current();
        _cardIdCounter.increment();

        items[itemId] = item;
        return itemId;
    }


    function getItem(
        uint256 itemId
    ) public view returns (string memory name, uint16 multiplier) {
        Item storage i = items[itemId];
        name = i.name;
        multiplier = i.multiplier;
    }

    function createCard(
        uint256 playerId,
        uint16 season,
        uint8 division,
        uint16 serialNumber,
        string calldata metadata,
        uint16 clubId
    )
        internal
        returns (
            uint256
        )
    {
        require(playerExists(playerId), "Player doesnot exist");
        require(clubExists(clubId), "Club doesnot exist");
        Card memory card;
        card.playerId = playerId;
        card.season = season;
        card.division = division;
        card.serialNumber = serialNumber;
        card.metadata = metadata;
        card.clubId = clubId;

        uint256 cardId = _cardIdCounter.current();
        _cardIdCounter.increment();

        cards[cardId] = card;
        return cardId;
    }

    function getCard(
        uint256 cardId // prettier-ignore
    )
        public
        view
        returns (
            uint256 playerId,
            uint16 season,
            uint256 division,
            uint16 serialNumber,
            string memory metadata,
            uint16 clubId
        )
    {
        Card storage c = cards[cardId];
        playerId = c.playerId;
        season = c.season;
        division = c.division;
        serialNumber = c.serialNumber;
        metadata = c.metadata;
        clubId = c.clubId;
    }


    function mint_nft_card(
        uint256 playerId,
        uint16 season,
        uint8 division,
        uint16 serialNumber,
        string calldata metadata,
        uint16 clubId,
        address to
    ) 
    public onlyOwner returns (uint256) {
        uint256 cardId = createCard(
            playerId,
            season,
            division,
            serialNumber,
            metadata,
            clubId
        );
        _safeMint(to, cardId);
        return cardId;
    }

    function mint_nft_item(
        string calldata name,
        uint16 multiplier,
        address to
    ) 
    public onlyOwner returns (uint256) {
        uint256 cardId = createItem(
            name, multiplier
        );
        _safeMint(to, cardId);
        return cardId;
    }


    

    //Opensea interface for viewing on opensea
    function supportsInterface(bytes4 interfaceId) public pure override returns(bool) {
        return interfaceId == 0x80ac58cd || interfaceId == 0x5b5e139f;
    }
}