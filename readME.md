## Coaches Frontend 🌐

*Frontend for the Coaches decentralized mentorship marketplace*

## 📌 About
**Coaches web** is the user-facing frontend for the Coaches platform.  
It allows mentors and mentees to connect, manage profiles, initiate mentorship agreements, and interact with the Stellar blockchain through non-custodial wallets.

This application is designed to provide a seamless Web3 experience while abstracting blockchain complexity for end users.

## 🚀 Key Features
- Mentor & mentee onboarding
- Wallet connection (Freighter / Albedo)
- Mentorship discovery & matching
- Escrow initiation on Stellar
- Transaction status tracking
- Responsive UI

## 🧠 How It Works
1. Mentors create profiles showcasing skills, experience, and pricing
2. Mentees browse and select mentors based on their needs
3. A smart contract (Stellar Soroban) locks funds in escrow
4. Mentorship sessions are conducted off-chain (video, chat, etc.)
5. Upon completion, funds are released automatically
6. Both parties leave verifiable feedback


## 🛠 Tech Stack
- Next.js / React
- TypeScript
- Tailwind CSS
- Stellar SDK
- Wallet connectors

## ⚙️ Setup & Installation
### Prerequisites
- Node.js ≥ 18
- npm or yarn
- Freighter Wallet

### Install
```bash
git clone https://github.com/MentoNest/coaches_frontend.git
cd coaches_frontend
npm install
```
### Run Locally
```bash
npm run dev
```
### 🧪 Testing 
```bash
 npm run test
```
## 👥 Contributing

We welcome contributions from the community! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request


## 🔗 Blockchain Integration
The frontend interacts with:
 - Stellar Network
 - Soroban smart contracts
 - Wallet providers for transaction signing.
All transactions are executed client-side using non-custodial wallets.

## 📂 Project Structure
```
  src/
  ├── components/
  ├── pages/
  ├── hooks/
  ├── services/
  ├── styles/
  └── utils/
```

## 📄 License
MIT License


