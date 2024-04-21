import { ethers } from "ethers"
import { RPC_URLS, TICKET_ADDRESS, TICKET_METADATA } from "./consants"

export const mintTicket = async (network, privateKey) => { 
    const provider = getEthersProvider(network)
    const wallet = new ethers.Wallet(privateKey, provider)
    const contract = new ethers.Contract(TICKET_ADDRESS[network], abi, wallet)
    const walletAddress = wallet.address
    const ticketId = 0
    const tx = await contract.mint(walletAddress, ticketId, 1, "0x")
    await tx.wait()
    return tx.hash
}

export const getUserTickets = async (network, address) => { 
    const provider = getEthersProvider(network)
    const contract = new ethers.Contract(TICKET_ADDRESS[network], abi, provider)
    const ticketId = 0
    const balance = await contract.balanceOf(address, ticketId)
    const tickets = []
    for (let i = 0; i < balance; i++) {
        tickets.push({ ticketId, metadata: TICKET_METADATA[ticketId]})
    }
    return tickets
}

const getEthersProvider = (network) => {
    return new ethers.providers.JsonRpcProvider(RPC_URLS[network])
}
