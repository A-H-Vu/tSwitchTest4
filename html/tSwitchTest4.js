/********************* 
 * Tswitchtest4 Test *
 *********************/

import { PsychoJS } from './lib/core-2020.1.js';
import * as core from './lib/core-2020.1.js';
import { TrialHandler } from './lib/data-2020.1.js';
import { Scheduler } from './lib/util-2020.1.js';
import * as util from './lib/util-2020.1.js';
import * as visual from './lib/visual-2020.1.js';
import * as sound from './lib/sound-2020.1.js';

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'tSwitchTest4';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(setupRoutineBegin());
flowScheduler.add(setupRoutineEachFrame());
flowScheduler.add(setupRoutineEnd());
const taskLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(taskLoopLoopBegin, taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopScheduler);
flowScheduler.add(taskLoopLoopEnd);
flowScheduler.add(endRoutineBegin());
flowScheduler.add(endRoutineEachFrame());
flowScheduler.add(endRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  });


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.1.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var setupClock;
var loc1;
var loc2;
var gLoc1;
var gLoc2;
var gridImg;
var gSize1;
var gSize2;
var corrAns;
var instrImage;
var thisExp;
var win;
var event;
var shuffle;
var pi;
var sin;
var cos;
var sqrt;
var instrClock;
var instrText;
var instrResp;
var trialClock;
var trialGrid;
var trialShape;
var key_resp;
var trialText;
var endClock;
var endText;
var endResp;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "setup"
  setupClock = new util.Clock();
  loc1 = (- 0.12);
  loc2 = 0.12;
  gLoc1 = 0;
  gLoc2 = 0;
  gridImg = "grid4a.png";
  gSize1 = 0.5;
  gSize2 = 0.5;
  corrAns = "b";
  instrImage = "instrImg1.png";
  
  // Code to fix reference errors in JS
  thisExp = psychoJS.experiment;
  win = psychoJS.window;
  event = psychoJS.eventManager;
  Array.prototype.append = [].push;
  shuffle = util.shuffle;
  document.documentElement.style.cursor = 'none';
  // Math related fixes
  pi = Math.PI;
  sin = Math.sin;
  cos = Math.cos;
  sqrt = Math.sqrt;
  // Initialize components for Routine "instr"
  instrClock = new util.Clock();
  instrText = new visual.TextStim({
    win: psychoJS.window,
    name: 'instrText',
    text: 'Space to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instrResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  trialGrid = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialGrid', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  trialShape = new visual.ImageStim({
    win : psychoJS.window,
    name : 'trialShape', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.2, 0.2],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  trialText = new visual.TextStim({
    win: psychoJS.window,
    name: 'trialText',
    text: 'A',
    font: 'Arial',
    units: undefined, 
    pos: [0.4, 0.4], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "end"
  endClock = new util.Clock();
  endText = new visual.TextStim({
    win: psychoJS.window,
    name: 'endText',
    text: 'This is the end of the experiment. Thank you for your time. Please remember to return to the questionnaire to carry on with the study. Press ‘space’ to exit.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  endResp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var setupComponents;
function setupRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'setup'-------
    t = 0;
    setupClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    // keep track of which components have finished
    setupComponents = [];
    
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function setupRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'setup'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = setupClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of setupComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function setupRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'setup'-------
    for (const thisComponent of setupComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "setup" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var taskLoop;
var currentLoop;
function taskLoopLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  taskLoop = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'taskCond.xlsx',
    seed: undefined, name: 'taskLoop'
  });
  psychoJS.experiment.addLoop(taskLoop); // add the loop to the experiment
  currentLoop = taskLoop;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTaskLoop of taskLoop) {
    const snapshot = taskLoop.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(instrRoutineBegin(snapshot));
    thisScheduler.add(instrRoutineEachFrame(snapshot));
    thisScheduler.add(instrRoutineEnd(snapshot));
    const trialsLoopScheduler = new Scheduler(psychoJS);
    thisScheduler.add(trialsLoopBegin, trialsLoopScheduler);
    thisScheduler.add(trialsLoopScheduler);
    thisScheduler.add(trialsLoopEnd);
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var trials;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.FULLRANDOM,
    extraInfo: expInfo, originPath: undefined,
    trialList: condsFile,
    seed: undefined, name: 'trials'
  });
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    const snapshot = trials.getSnapshot();
    thisScheduler.add(importConditions(snapshot));
    thisScheduler.add(trialRoutineBegin(snapshot));
    thisScheduler.add(trialRoutineEachFrame(snapshot));
    thisScheduler.add(trialRoutineEnd(snapshot));
    thisScheduler.add(endLoopIteration(thisScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


function taskLoopLoopEnd() {
  psychoJS.experiment.removeLoop(taskLoop);

  return Scheduler.Event.NEXT;
}


var _instrResp_allKeys;
var instrComponents;
function instrRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'instr'-------
    t = 0;
    instrClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instrResp.keys = undefined;
    instrResp.rt = undefined;
    _instrResp_allKeys = [];
    if ((condsFile === "tSwitchCond1.xlsx")) {
        instrText.text = "Press 'b' if you see a square. Press 'm' if you see a diamond. Press 'space' to continue";
    } else {
        if ((condsFile === "tSwitchCond2.xlsx")) {
            instrText.text = "Press 'b' if you see two dots. Press 'm' if you see three dots. Press 'space' to continue";
        } else {
            if ((condsFile === "tSwitchCond3.xlsx")) {
                instrText.text = "IN THE TOP HALF:Press 'b' if you see a square. Press 'm' if you see a diamond. IN THE BOTTOM HALF: Press 'b' if you see two dots. Press 'm' if you see three dots. Press 'space' to continue.";
            } else {
                instrText.text = "Press 'space' to continue";
            }
        }
    }
    
    // keep track of which components have finished
    instrComponents = [];
    instrComponents.push(instrText);
    instrComponents.push(instrResp);
    
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function instrRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'instr'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instrClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instrText* updates
    if (t >= 0.0 && instrText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrText.tStart = t;  // (not accounting for frame time here)
      instrText.frameNStart = frameN;  // exact frame index
      
      instrText.setAutoDraw(true);
    }

    
    // *instrResp* updates
    if (t >= 0.0 && instrResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instrResp.tStart = t;  // (not accounting for frame time here)
      instrResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instrResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instrResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instrResp.clearEvents(); });
    }

    if (instrResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = instrResp.getKeys({keyList: ['space'], waitRelease: false});
      _instrResp_allKeys = _instrResp_allKeys.concat(theseKeys);
      if (_instrResp_allKeys.length > 0) {
        instrResp.keys = _instrResp_allKeys[_instrResp_allKeys.length - 1].name;  // just the last key pressed
        instrResp.rt = _instrResp_allKeys[_instrResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instrComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instrRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'instr'-------
    for (const thisComponent of instrComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "instr" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    trialGrid.setPos([gLoc1, gLoc2]);
    trialGrid.setSize([gSize1, gSize2]);
    trialGrid.setImage(gridImg);
    trialShape.setPos([loc1, loc2]);
    trialShape.setImage(shapeStim);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    trialText.text = trials.thisN.toString();
    if ((trials.thisN === 0)) {
        continueRoutine = false;
    }
    if ((condsFile === "tSwitchCond1.xlsx")) {
        gridImg = "grid2a.png";
        gLoc1 = 0;
        gLoc2 = 0.12;
        gSize1 = 0.5;
        gSize2 = 0.25;
        if (((shapeStim === "square2.png") || (shapeStim === "square3.png"))) {
            corrAns = "b";
        } else {
            if (((shapeStim === "diamond2.png") || (shapeStim === "diamond3.png"))) {
                corrAns = "m";
            } else {
                corrAns = "err";
            }
        }
        if (((trials.thisN % 2) === 0)) {
            loc1 = (- 0.12);
            loc2 = 0.12;
        } else {
            if (((trials.thisN % 2) === 1)) {
                loc1 = 0.12;
                loc2 = 0.12;
            } else {
                loc1 = (- 0.12);
                loc2 = 0.12;
            }
        }
    } else {
        if ((condsFile === "tSwitchCond2.xlsx")) {
            gridImg = "grid2a.png";
            gLoc1 = 0;
            gLoc2 = (- 0.12);
            gSize1 = 0.5;
            gSize2 = 0.25;
            if (((shapeStim === "square2.png") || "shapeStim == diamond2.png")) {
                corrAns = "b";
            } else {
                if (((shapeStim === "square3.png") || "shapeStim == diamond3.png")) {
                    corrAns = "m";
                } else {
                    corrAns = "err";
                }
            }
            if (((trials.thisN % 2) === 0)) {
                loc1 = (- 0.12);
                loc2 = (- 0.12);
            } else {
                if (((trials.thisN % 2) === 1)) {
                    loc1 = 0.12;
                    loc2 = (- 0.12);
                } else {
                    loc1 = 0.12;
                    loc2 = (- 0.12);
                }
            }
        } else {
            if ((condsFile === "tSwitchCond3.xlsx")) {
                gridImg = "grid4a.png";
                gLoc1 = 0;
                gLoc2 = 0;
                gSize1 = 0.5;
                gSize2 = 0.5;
                if ((((shapeStim === "square2.png") || (shapeStim === "square3.png")) && (loc2 === 0.12))) {
                    corrAns = "b";
                } else {
                    if ((((shapeStim === "diamond2.png") || (shapeStim === "diamond3.png")) && (loc2 === 0.12))) {
                        corrAns = "m";
                    } else {
                        if ((((shapeStim === "square2.png") || (shapeStim === "diamond2.png")) && (loc2 === (- 0.12)))) {
                            corrAns = "b";
                        } else {
                            if ((((shapeStim === "square3.png") || (shapeStim === "diamond3.png")) && (loc2 === (- 0.12)))) {
                                corrAns = "m";
                            } else {
                                corrAns = "err";
                            }
                        }
                    }
                }
                if (((trials.thisN % 4) === 0)) {
                    loc1 = (- 0.12);
                    loc2 = 0.12;
                } else {
                    if (((trials.thisN % 4) === 1)) {
                        loc1 = 0.12;
                        loc2 = 0.12;
                    } else {
                        if (((trials.thisN % 4) === 2)) {
                            loc1 = 0.12;
                            loc2 = (- 0.12);
                        } else {
                            if (((trials.thisN % 4) === 3)) {
                                loc1 = (- 0.12);
                                loc2 = (- 0.12);
                            } else {
                                loc1 = 0.12;
                                loc2 = 0.12;
                            }
                        }
                    }
                }
            } else {
                continueRoutine = false;
            }
        }
    }
    
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(trialGrid);
    trialComponents.push(trialShape);
    trialComponents.push(key_resp);
    trialComponents.push(trialText);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function trialRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *trialGrid* updates
    if (t >= 0.0 && trialGrid.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialGrid.tStart = t;  // (not accounting for frame time here)
      trialGrid.frameNStart = frameN;  // exact frame index
      
      trialGrid.setAutoDraw(true);
    }

    
    // *trialShape* updates
    if (t >= 0.0 && trialShape.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialShape.tStart = t;  // (not accounting for frame time here)
      trialShape.frameNStart = frameN;  // exact frame index
      
      trialShape.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      key_resp.clock.reset();
      key_resp.start();
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['b', 'm'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corrAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *trialText* updates
    if (t >= 0.0 && trialText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      trialText.tStart = t;  // (not accounting for frame time here)
      trialText.frameNStart = frameN;  // exact frame index
      
      trialText.setAutoDraw(true);
    }

    if ((trials.thisN === 0)) {
        continueRoutine = false;
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corrAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _endResp_allKeys;
var endComponents;
function endRoutineBegin(trials) {
  return function () {
    //------Prepare to start Routine 'end'-------
    t = 0;
    endClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    endResp.keys = undefined;
    endResp.rt = undefined;
    _endResp_allKeys = [];
    // keep track of which components have finished
    endComponents = [];
    endComponents.push(endText);
    endComponents.push(endResp);
    
    for (const thisComponent of endComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function endRoutineEachFrame(trials) {
  return function () {
    //------Loop for each frame of Routine 'end'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = endClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *endText* updates
    if (t >= 0.0 && endText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endText.tStart = t;  // (not accounting for frame time here)
      endText.frameNStart = frameN;  // exact frame index
      
      endText.setAutoDraw(true);
    }

    
    // *endResp* updates
    if (t >= 0.0 && endResp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      endResp.tStart = t;  // (not accounting for frame time here)
      endResp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { endResp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { endResp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { endResp.clearEvents(); });
    }

    if (endResp.status === PsychoJS.Status.STARTED) {
      let theseKeys = endResp.getKeys({keyList: ['space'], waitRelease: false});
      _endResp_allKeys = _endResp_allKeys.concat(theseKeys);
      if (_endResp_allKeys.length > 0) {
        endResp.keys = _endResp_allKeys[_endResp_allKeys.length - 1].name;  // just the last key pressed
        endResp.rt = _endResp_allKeys[_endResp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of endComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function endRoutineEnd(trials) {
  return function () {
    //------Ending Routine 'end'-------
    for (const thisComponent of endComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "end" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(thisScheduler, loop) {
  // ------Prepare for next entry------
  return function () {
    if (typeof loop !== 'undefined') {
      // ------Check if user ended loop early------
      if (loop.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(loop);
        }
      thisScheduler.stop();
      } else {
        const thisTrial = loop.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(loop);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(trials) {
  return function () {
    psychoJS.importAttributes(trials.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  document.documentElement.style.cursor = 'auto';
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
