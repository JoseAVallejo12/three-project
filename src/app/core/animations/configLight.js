import { Light } from 'three';
import { redLigth, blueLigth, greenLigth } from '../resources/light/point_ligth/index';

let formElement = null;


const lightSettings = {
  red: { isActive: false, positions: { x: 0, y: 0, z: 0 } },
  blue: { isActive: false, positions: { x: 0, y: 0, z: 0 } },
  green: { isActive: false, positions: { x: 0, y: 0, z: 0 } },
};

export default function getFieldsetElements() {
  formElement = document.getElementById('light-selector');

  configSelectedLight()

  formElement?.addEventListener('change', (event) => {
    event.preventDefault();
    setInputsRangeValues(event)
    configSelectedLight();
  });
}


function setInputsRangeValues({ target }) {
  const positions = {
    'light-option-red': lightSettings.red.positions,
    'light-option-blue': lightSettings.blue.positions,
    'light-option-green': lightSettings.green.positions
  }
  if (target.type === 'radio') {
    setPositions(positions[target.id]);
  }
}

function configSelectedLight() {
  lightSettings.red.isActive = formElement.elements['light-option-red'].checked
  lightSettings.blue.isActive = formElement.elements['light-option-blue'].checked
  lightSettings.green.isActive = formElement.elements['light-option-green'].checked

  if (lightSettings.red.isActive) configRedLight();
  if (lightSettings.blue.isActive) configBlueLight();
  if (lightSettings.green.isActive) configGreenLight();
}

function configRedLight() {
  lightSettings.red.positions = getPositionsValues();

  const { x, y, z } = lightSettings.red.positions
  setPositions(lightSettings.red.positions)
  console.log('Config positionss', { x, y, z })
}


function configBlueLight() {
  lightSettings.blue.positions = getPositionsValues();

  const { x, y, z } = lightSettings.blue.positions
  setPositions(lightSettings.blue.positions)
  console.log('Config positionss', { x, y, z })
}


function configGreenLight() {

  lightSettings.green.positions = getPositionsValues();

  const { x, y, z } = lightSettings.green.positions
  setPositions(lightSettings.green.positions)
  console.log('Config positionss', { x, y, z })

}


function setPositions({ x, y, z }) {
  formElement.elements['axis-x'].value = x;
  formElement.elements['axis-y'].value = y;
  formElement.elements['axis-z'].value = z

}

function getPositionsValues(form) {
  return {
    x: formElement.elements['axis-x'].value,
    y: formElement.elements['axis-y'].value,
    z: formElement.elements['axis-z'].value,
  }
}
