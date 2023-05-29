const users = [
	{
		id: 1,
		username: 'bangmessi',
	},
	{
		id: 2,
		username: 'bangdodo',
	},
];

const transactions = [
	{
		userId: 1,
		transactions: [
			{
				id: 1,
				status: 'terkirim',
			},
			{
				id: 2,
				status: 'sedang dikirim',
			},
		],
	},
	{
		userId: 2,
		transactions: [
			{
				id: 3,
				status: 'terkirim',
			},
			{
				id: 4,
				status: 'dibatalkan',
			},
		],
	},
];

const detailTransaction = [
	{
		id: 1,
		productName: 'Kopi',
		qty: 1,
		totalAmount: 5000,
	},
	{
		id: 2,
		productName: 'Teh',
		qty: 4,
		totalAmount: 1000,
	},
	{
		id: 3,
		productName: 'Beras',
		qty: 1,
		totalAmount: 5000,
	},
	{
		id: 4,
		productName: 'Gula',
		qty: 4,
		totalAmount: 1000,
	},
];

async function login(username) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(users.find((u) => u.username === username));
		}, 1000);
	});
}

function getTransactions(userId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
      resolve(transactions.find((t) => t.userId === userId))
    }, 1000);;
	});
}

function getDetailTransaction(transactionId) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
      resolve(detailTransaction.find((dt) => dt.id === transactionId));
    }, 1500);
	});
}

async function main() {
	try {
		// Autentikasi
		const auth = await login('bangmessi');
		console.log('Berhasil login:', auth);

		// Transaksi-transaksi user
		const userTransactions = await getTransactions(auth.id);
		console.log(`Transaksi-transaksi user ${auth.username}`, userTransactions);

		// Detail transaksi-transaksi user
		const detailUserTransactions = await Promise.all(
			userTransactions.transactions.map((t) => getDetailTransaction(t.id))
		);
		console.log(
			`Detail transaksi-transaksi user ${auth.username}`,
			detailUserTransactions
		);
	} catch (err) {
		console.log(err.message || err);
	}
}

main();
