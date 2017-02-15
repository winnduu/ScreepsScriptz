//Sets the max of workers you want
var workerPopMax = 4;
var builderPopMax = 2;
var upgraderPopMax = 2;
var repairPopMax = 1;

//Grabs on many workers of each type on map
var workerPop = _.sum(Game.creeps, (c) => c.memory.role == 'harvester');
var builderPop = _.sum(Game.creeps, (c) => c.memory.role == 'builder');
var upgraderPop = _.sum(Game.creeps, (c) => c.memory.role == 'upgrader');
var soldierPop = _.sum(Game.creeps, (c) => c.memory.role == 'soldier');
var repairerPop = _.sum(Game.creeps, (c) => c.memory.role == 'repairer');

var totalPop = workerPop + builderPop + upgraderPop + repairerPop;

var workerNum = 0;
var name = undefined;

var autoPopulate = {

   run: function() 
  {
    if (workerPop < workerPopMax)
    {
        Game.spawns.Hive.createCreep([WORK, WORK, CARRY, MOVE], undefined, {role: 'harvester'});
    }

    else if (upgraderPop < upgraderPopMax)
    {
        Game.spawns.Hive.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
    }

    else if(builderPop < builderPopMax)
    {
        Game.spawns.Hive.createCreep([WORK, CARRY, CARRY, CARRY,  MOVE], undefined, {role: 'builder'});

    }
     else if (repairerPop < repairPopMax) {
    // try to spawn one
       Game.spawns.Hive.createCreep([WORK,WORK,CARRY ,MOVE], undefined,
        { role: 'repairer', working: false});
    }

   //Soldier spawn code here
}

};

module.exports = autoPopulate;
