import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

export const __dirname = dirname(fileURLToPath(import.meta.url));

export const ROOT_PATH = path.resolve('./chains');
export const CHAIN_INFO_FILE = 'chain-information.json';
export const CHAIN_LOGO_FILE = 'chain-logo.png';
export const NATIVE_TOKEN_LOGO_FILE = 'token-logo.png';
export const TOKEN_LOGO_FILE = 'logo.png';
export const CHAINS_FOLDER_URL = 'https://raw.githubusercontent.com/ava-labs/subnet-assets/main/chains';
export const ERC20_TOKEN_LIST_FILE = path.resolve(__dirname, '../tokenList.erc20.json');
export const CHAIN_LIST_FILE = path.resolve(__dirname, '../chainList.json');
export const ADDRESS_LIST_FILE = path.resolve(__dirname, '../addressList.json');
export const CONTRACT_TOKEN_INFO_FILE = 'contract-information.json';
export const MAINNET_CHAIN_ID = 43114;
export const FUJI_CHAIN_ID = 43113;
export const SUBNETS_FOLDER_URL = 'https://raw.githubusercontent.com/ava-labs/subnet-assets/main/subnets';
export const SUBNETS_ROOT_PATH = path.resolve('./subnets');
export const SUBNET_INFO_FILE = 'subnet-information.json';
export const SUBNET_LOGO_FILE = 'subnet-logo.png';
export const SUBNET_GROUPS_FILE = path.resolve('./subnetGroups/subnet-groups.json');
export const FORMATTED_SUBNET_GROUPS_FILE = path.resolve(__dirname, '../subnetGroupList.json');
export const SUBNET_LIST_FILE = path.resolve(__dirname, '../subnetList.json');
export const MAINNET_SUBNET_LIST_FILE = path.resolve(__dirname, '../mainnetSubnetList.json');
export const TESTNET_SUBNET_LIST_FILE = path.resolve(__dirname, '../testnetSubnetList.json');
