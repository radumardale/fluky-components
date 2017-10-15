import { observable, computed } from 'mobx';

import atomsData from '../../../config/atomsData';
import moleculesData from '../../../config/moleculesData';

const dataToMenuItem = base => component => {
  return {
    displayName: component.name,
    link: `${base}/${component.name}`
  };
};

const menu = [{
  displayName: 'Icons',
  link: '/icons',
},{
  displayName: 'Atoms',
  children : atomsData.map(dataToMenuItem('/atoms'))
}, {
  displayName: 'Molecules',
  children: moleculesData.map(dataToMenuItem('/molecules'))
}, {
  displayName: 'Theme',
  link: '/theme',
}];

class DocumentationStore {

  @computed get menu() {
    return menu;
  }

  @observable atoms = atomsData;
  @observable molecules = moleculesData;

  @observable allComponents = this.atoms.concat(this.molecules);

  // @observable selectedComponent = this.atoms[0];

};

const docStore = new DocumentationStore();

export default docStore;
