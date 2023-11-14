import postgres from 'postgres'

const sql = postgres(
    {
        host: "localhost",
        db: 'test',
        port: 5432,
        username: "test",
        password: "test",
        database: "test",
    }
)



export default sql