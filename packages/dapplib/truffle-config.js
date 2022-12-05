require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope arctic surge short bitter birth ranch company hunt problem forget sketch'; 
let testAccounts = [
"0x76728b9a84012dd9daa9d8fcb2aa599e29130231d6a0a5670545a96dd7578b85",
"0xc4cb5b4880e4e982f805a4ecbb9c0550ce23c85c051d4e372b1457714ae2e014",
"0xd35b21fec653876bdfbb1256394ea63d11bdcbd2a565e8b07e183a08c12c9b56",
"0x0950eaf44cf933cd66953720b74eca8e2029aa29cbe42386907026b2a79a09c5",
"0x642d3f91258e94e460900710cb9c0189c6223c1287f9a4380a34a99bf44cedc4",
"0x32d472611106f99be7b4182bbfea2e92fc3778d5f759dffdd166f2e2e0438ec1",
"0x1384a099d3e7c84d2184e8b03c47ad1d2bc44987a7a4dcbfc93677f6ec39a337",
"0x6b029e7588f82a0667426dc842a2698518305321a7e18ec6592d44fe309de5fc",
"0xb281fc395e7ed9f0e5345a2b08fc41837b93348dae38d06436d57ad88a916f45",
"0xe24b0c28dba4f300fbbd16b11edf15a4679cecf652b5c2d36660f77a6d452908"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

