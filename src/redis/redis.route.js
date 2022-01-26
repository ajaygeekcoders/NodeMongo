
const apiRoutes = require('express').Router();
const RedisController = require("./redis.controller");

apiRoutes.post("/", RedisController.addRedisKey);
apiRoutes.put("/", RedisController.updateRedisKey);
apiRoutes.get("/", RedisController.getAllRedisKey);
apiRoutes.get("/:redisKey", RedisController.getSingleRedisKey);
apiRoutes.delete("/:redisKey", RedisController.removeRedisKey);

module.exports = apiRoutes;