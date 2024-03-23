import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project mapper specs', () => {
  it('should return empty array when feeding undefined project list', () => {
    // Arrange
    const projectList = undefined;

    // Act
    const result = mapProjectFromApiToVm(projectList);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty array when feeding null project list', () => {
    // Arrange
    const projectList = null;

    // Act
    const result = mapProjectFromApiToVm(projectList);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project object when feeding empty project object', () => {
    // Arrange
    const projectList: apiModel.Project = viewModel.createEmptyProject();

    // Act
    const result = mapProjectFromApiToVm(projectList);

    // Assert
    expect(result).toEqual(projectList);
  });
  it('should return one item with values when passing one item with values', () => {
    //  Arrage
    const projectList: apiModel.Project = {
      id: '1',
      name: 'John',
      externalId: '1',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'John',
      externalId: '1',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
      ],
    };
    
    //  Act
    const result = mapProjectFromApiToVm(projectList);

    //  Assert
    expect(result).toEqual(expectedResult);
  });
  it('should return two item with values when passing two item with values', () => {
    //  Arrage
    const projectList: apiModel.Project = {
      id: '1',
      name: 'Test',
      externalId: '1',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
        {
          id: '2',
          isAssigned: true,
          employeeName: 'Jane',
        },
      ],
    };

    const expectedResult: viewModel.Project = {
      id: '1',
      name: 'Test',
      externalId: '1',
      comments: 'Test comments',
      isActive: false,
      employees: [
        {
          id: '1',
          isAssigned: false,
          employeeName: 'John',
        },
        {
          id: '2',
          isAssigned: true,
          employeeName: 'Jane',
        },
      ],
    };

    //  Act
    const result = mapProjectFromApiToVm(projectList);

    //  Assert
    expect(result).toEqual(expectedResult);
  });
});
