export default [
  {
    route: "addresses",
    title: "Search addresses",
    api: "addresses",
    default: { query: { term: { type: "address" } } }
  },
  {
    route: "blocks",
    title: "Search blocks",
    api: "blocks_transactions",
    default: { query: { term: { type: "block" } } }
  },
  {
    route: "transactions",
    title: "Search transactions",
    api: "blocks_transactions",
    default: { query: { term: { type: "transaction" } } }
  },
  {
    route: "abi",
    title: "Search addresses by ABI",
    api: "implements_abi",
    default: {
      abi: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "_from",
              type: "address"
            },
            {
              indexed: true,
              name: "_to",
              type: "address"
            },
            {
              indexed: false,
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "Transfer",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              name: "_owner",
              type: "address"
            },
            {
              indexed: true,
              name: "_approved",
              type: "address"
            },
            {
              indexed: false,
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "Approval",
          type: "event"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_owner",
              type: "address"
            }
          ],
          name: "balanceOf",
          outputs: [
            {
              name: "_balance",
              type: "uint256"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [
            {
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "ownerOf",
          outputs: [
            {
              name: "_owner",
              type: "address"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "transfer",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_to",
              type: "address"
            },
            {
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "approve",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            {
              name: "_tokenId",
              type: "uint256"
            }
          ],
          name: "takeOwnership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        }
      ]
    }
  }
];
