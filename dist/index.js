"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
const simple_git_1 = __importDefault(require("simple-git"));
const utils_1 = require("./utils");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/testing', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ "testing": "It Works" });
}));
app.post('/deploy', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { repo } = req.body;
    const id = (0, utils_1.generateUniqueId)();
    yield (0, simple_git_1.default)().clone(repo, path_1.default.join(__dirname, `output/${id}`));
    const files = (0, utils_1.getAllFiles)(path_1.default.join(__dirname, `output/${id}`));
    console.log(files);
    res.json(repo);
}));
const server = http_1.default.createServer(app);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is up at port ${PORT}`);
});
