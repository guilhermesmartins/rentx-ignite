import { hash } from 'bcrypt';
import { getConnection } from 'typeorm';
import { v4 } from 'uuid';

import createConnection from '../index';

async function create() {
    const conn = await createConnection('localhost');

    const id = v4();
    const password = await hash('admin', 8);

    await conn.query(
        `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, driver_license) 
            values('${id}', 'admin', 'admin@rentx.com', '${password}', true, 'now()', 'XXXXXX')`
    );

    await conn.close();
}

create().then(() => console.log('user admin created!'));