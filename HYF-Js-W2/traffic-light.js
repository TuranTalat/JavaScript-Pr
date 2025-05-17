function getCurrentState(trafficLight) {
  return trafficLight.possibleStates[trafficLight.stateIndex];
}

function getNextIndex(currentIndex, statesLength) {
  if (currentIndex === statesLength - 1) {
    return 0;
  } else {
    return currentIndex + 1;
  }
}

function main() {
  const trafficLight = {
    possibleStates: ['green', 'orange', 'red'],
    stateIndex: 0
  };

  for (let i = 0; i < 6; i++) {
    const state = getCurrentState(trafficLight);
    console.log('Current light:', state);

    trafficLight.stateIndex = getNextIndex(
      trafficLight.stateIndex,
      trafficLight.possibleStates.length
    );
  }
}

main();
