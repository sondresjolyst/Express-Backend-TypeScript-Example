import winston, { format, transports } from 'winston';

export const winstonLog = winston.createLogger({
    format: format.combine(
        format.json(),
        format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        //
        // The simple format outputs
        // `${level}: ${message} ${[Object with everything else]}`
        //
        //
        // Alternatively you could use this custom printf format if you
        // want to control where the timestamp comes in your final message.
        // Try replacing `format.simple()` above with this:
        //
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)
      ),
      transports: [
        new transports.Console()
      ]
    });

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
    winstonLog.add(new winston.transports.Console({
        format: winston.format.json(),
    }));
}