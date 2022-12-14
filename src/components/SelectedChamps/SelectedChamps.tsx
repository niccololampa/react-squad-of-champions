import * as React from 'react'
import './SelectedChamps.css'
import AvgChampAbility from '../AvgChampsAbility/AvgChampsAbility'
import SelectedChampImage from '../SelectChampImage/SelectChampImage'
import type { Character } from '../../types'

const SelectedChamps = ({
  charactersSelected,
  handleRemoveChamp,
}: {
  charactersSelected: Character[]
  handleRemoveChamp: (index: number) => void
}) => {
  return (
    <div className='selected-champs-container'>
      <div className='champs-text'>Your Champions!</div>

      <div className='selected-characters-image-container'>
        {charactersSelected.map((character: Character, index: number) => {
          return (
            <SelectedChampImage
              src={character.image}
              name={character.name}
              index={index}
              key={character.name + '-' + index}
              handleRemoveChamp={handleRemoveChamp}
            />
          )
        })}
      </div>
      <div className='average-abilities-text'>Average Abilities</div>
      <table className='ability-average-table'>
        <thead>
          <tr>
            <th>Power</th>
            <th>Mobility</th>
            <th>Technique</th>
            <th>Survivability</th>
            <th>Energy</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <AvgChampAbility charactersSelected={charactersSelected} ability={'Power'} />
            </td>
            <td>
              <AvgChampAbility charactersSelected={charactersSelected} ability={'Mobility'} />
            </td>
            <td>
              <AvgChampAbility charactersSelected={charactersSelected} ability={'Technique'} />
            </td>
            <td>
              <AvgChampAbility charactersSelected={charactersSelected} ability={'Survivability'} />
            </td>
            <td>
              <AvgChampAbility charactersSelected={charactersSelected} ability={'Energy'} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SelectedChamps
