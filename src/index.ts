import app from './app';
import { AppDataSource } from './db';

async function main() {
    try {
        await AppDataSource.initialize();
        app.listen(app.get('port'), () => {
            console.log('listening on port', app.get('port'));
        });
    }
    catch (error) {
        console.error(error);
    }

}

main();
