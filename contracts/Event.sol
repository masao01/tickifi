// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract Event is ERC1155, Ownable, ERC1155Burnable {
    mapping(address => bool) public scans;

    constructor(
        address initialOwner
    )
        ERC1155(
            "https://scarlet-adequate-clownfish-387.mypinata.cloud/ipfs/QmejDXisyjxKRTx84WqTZCYzN9BMmpHmykhxwUA25gZBAq/{id}"
        )
        Ownable(initialOwner)
    {}

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(
        address account,
        uint256 id,
        uint256 amount,
        bytes memory data
    ) public onlyOwner {
        _mint(account, id, amount, data);
    }

    function mintBatch(
        address to,
        uint256[] memory ids,
        uint256[] memory amounts,
        bytes memory data
    ) public onlyOwner {
        _mintBatch(to, ids, amounts, data);
    }

    function scan(address owner, uint256 ticketId) public {
        require(scans[owner] == false, "Ticket already scanned");
        scans[owner] = true;
    }

    function isScanned(address owner) public view returns (bool) {
        return scans[owner];
    }
}
