"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'danilo',
    database: 'danservice',
    synchronize: true,
    entities: ['dist/**/**/*.entity.js'],
};
//# sourceMappingURL=orm.config.js.map