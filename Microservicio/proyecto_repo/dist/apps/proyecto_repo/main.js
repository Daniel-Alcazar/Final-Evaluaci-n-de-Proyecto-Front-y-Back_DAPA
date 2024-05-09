/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/proyecto_repo/src/app.controller.ts":
/*!**************************************************!*\
  !*** ./apps/proyecto_repo/src/app.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_dto_1 = __webpack_require__(/*! ./dto/user.dto */ "./apps/proyecto_repo/src/dto/user.dto.ts");
const id_dto_1 = __webpack_require__(/*! ./dto/id.dto */ "./apps/proyecto_repo/src/dto/id.dto.ts");
let AppController = class AppController {
    getHello() {
        throw new Error('Method not implemented.');
    }
    constructor(userCrud) {
        this.userCrud = userCrud;
    }
    async getUsers() {
        const result = await this.userCrud.send('usuarios', {}).toPromise();
        return result;
    }
    async hello() {
        const users = await this.getUsers();
        return {
            users: users
        };
    }
    async login() {
        return { message: 'Por favor, inicia sesión' };
    }
    async loginsession(body, res) {
        const simulatedUsers = [
            { username: 'daniel', password: 'daniel@unach.mx' },
            { username: 'daniel', password: 'daniel.prez2@unach.mx' },
        ];
        const user = simulatedUsers.find(user => user.username === body.username && user.password === body.password);
        if (user) {
            return res.redirect('/index');
        }
        else {
            return res.redirect('/login');
        }
    }
    async getUser(idDto) {
        const { id } = idDto;
        var result = this.userCrud.send('obtener', id);
        return result;
    }
    async createUser(UserDto) {
        var result = this.userCrud.send('crear', UserDto);
        return result;
    }
    async updateUser(updateUserDto) {
        const result = await this.userCrud.send('actualizar', updateUserDto);
        return result;
    }
    async deleteUser(idDto) {
        const { id } = idDto;
        var result = this.userCrud.send('eliminar', id);
        return result;
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('usuarios'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUsers", null);
__decorate([
    (0, common_1.Get)('/index'),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "hello", null);
__decorate([
    (0, common_1.Get)('/login'),
    (0, common_1.Render)('login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "loginsession", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof id_dto_1.IdDto !== "undefined" && id_dto_1.IdDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getUser", null);
__decorate([
    (0, common_1.Post)('crear'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof user_dto_1.UserDto !== "undefined" && user_dto_1.UserDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "createUser", null);
__decorate([
    (0, common_1.Patch)('actualizar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof user_dto_1.UptadeUserDto !== "undefined" && user_dto_1.UptadeUserDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "updateUser", null);
__decorate([
    (0, common_1.Delete)('eliminar'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof id_dto_1.IdDto !== "undefined" && id_dto_1.IdDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteUser", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __param(0, (0, common_1.Inject)('danservice')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AppController);


/***/ }),

/***/ "./apps/proyecto_repo/src/app.module.ts":
/*!**********************************************!*\
  !*** ./apps/proyecto_repo/src/app.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_controller_1 = __webpack_require__(/*! ./app.controller */ "./apps/proyecto_repo/src/app.controller.ts");
const app_service_1 = __webpack_require__(/*! ./app.service */ "./apps/proyecto_repo/src/app.service.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'danservice',
                    transport: microservices_1.Transport.REDIS,
                    options: {
                        host: 'localhost',
                        port: 6379,
                    }
                },
            ]),
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);


/***/ }),

/***/ "./apps/proyecto_repo/src/app.service.ts":
/*!***********************************************!*\
  !*** ./apps/proyecto_repo/src/app.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AppService = class AppService {
    constructor(clientMicro) {
        this.clientMicro = clientMicro;
    }
    getHello() {
        return 'Proyecto Monorepo!';
    }
    newUser(user) {
        this.clientMicro.emit('new_micro', user);
        return 'Retorno exitoso Dan';
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('danservice')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AppService);


/***/ }),

/***/ "./apps/proyecto_repo/src/dto/id.dto.ts":
/*!**********************************************!*\
  !*** ./apps/proyecto_repo/src/dto/id.dto.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IdDto = void 0;
class IdDto {
}
exports.IdDto = IdDto;


/***/ }),

/***/ "./apps/proyecto_repo/src/dto/user.dto.ts":
/*!************************************************!*\
  !*** ./apps/proyecto_repo/src/dto/user.dto.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UptadeUserDto = exports.UserDto = void 0;
class UserDto {
}
exports.UserDto = UserDto;
class UptadeUserDto {
}
exports.UptadeUserDto = UptadeUserDto;


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./apps/proyecto_repo/src/main.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const app_module_1 = __webpack_require__(/*! ./app.module */ "./apps/proyecto_repo/src/app.module.ts");
const path_1 = __webpack_require__(/*! path */ "path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('hbs');
    await app.listen(3001);
}
bootstrap();

})();

/******/ })()
;