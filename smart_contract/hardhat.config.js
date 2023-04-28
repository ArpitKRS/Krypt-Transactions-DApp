require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/5g5jyYY4iwYq-ZgylezvhmmQhziQtfwI",
      accounts: ['576940d2f32e41532dcbb97233e6d86ce85d8dcc471eb26e4c45be67e98bf9d3'],
    }
  }
}