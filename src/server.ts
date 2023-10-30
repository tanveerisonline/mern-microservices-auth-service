import app from './app';
import { Config } from './config';
import logger from './config/logger';

const startServer = () => {
    const PORT = Config.PORT;
    try {
        // throw new Error('Something went wrong!');
        // logger.debug('debug message', {});
        app.listen(PORT, () => logger.info(`Listnening of Port ${PORT}`));
    } catch (err: unknown) {
        if (err instanceof Error) {
            logger.error(err.message);

            setTimeout(() => {
                process.exit(1);
            }, 2000);
        }
    }
};
startServer();
