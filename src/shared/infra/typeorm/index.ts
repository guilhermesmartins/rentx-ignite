import { createConnection, getConnectionOptions } from '@shared/infra/typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database';
    createConnection({
        ...options
    });
});