require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give glove fresh speak notice crime remember erosion hover entire front stable'; 
let testAccounts = [
"0xec9cae02fa42e1b600611fac46d763b385d93560932ae44b2b28f178defc689d",
"0x340af259e0f3aa4b9b86e0770b116b71f61736aa2708be9d64df83344ae35d4e",
"0xd7c030d889bbc7586b15a06e2860faac3a7ece7aba8236fc12b2f6cab7206a31",
"0x35ca2c9c32243f962332edbfb9b6da7259eab11dfe9ab8d98c227b3aae26cac1",
"0x4d3b263654e1d4a9cfa9630aac6459f93e8b7ce9167311e7fcc639312590c953",
"0xbb29bc52b23762f7be15a2c0f4c95c98830cb70a6dd7fe16aa67fb31e2de6151",
"0xaa93efbd95cb8b08a0e0319ec451885281127ee1e30a6c901b7d389bbb7a3247",
"0xb9853fbde793f414c971eab54919dc7e0e54cad743eab3eaf047edd66eb5e553",
"0x2fd40ae45d38092ec8507d54e9f021c9b8b553394da868d4cbfe812e2199bee6",
"0x5c3eae0dce7a39848c30096452a7c1be94087fcea4fdac00be1ef248b28832c1"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


