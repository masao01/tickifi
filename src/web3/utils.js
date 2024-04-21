import { ethers } from "ethers"
import { RPC_URLS, TICKET_ADDRESS, TICKET_METADATA ,TICKET_ABI} from "./consants"

export const mintTicket = async (network, privateKey) => { 
    const provider = getEthersProvider(network)
    const wallet = new ethers.Wallet(privateKey, provider)
    const contract = new ethers.Contract(TICKET_ADDRESS[network], TICKET_ABI, wallet)
    const walletAddress = wallet.address
    const ticketId = 0
    const tx = await contract.mint(walletAddress, ticketId, 1, "0x")
    await tx.wait()
    console.log(`tx: ${JSON.stringify(tx, null, 2)}`);
    return tx.hash
}

export const getUserTickets = async (network, address) => { 
    const provider = getEthersProvider(network)
    const contract = new ethers.Contract(TICKET_ADDRESS[network], TICKET_ABI, provider)
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
