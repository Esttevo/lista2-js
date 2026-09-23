let config = {
    status: true
}

Object.freeze(config);

console.log(config);

config.status = false;

console.log(config);

config.versao = 1.0;

console.log(config);
