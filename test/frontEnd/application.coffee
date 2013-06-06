
describe 'Controllers', ()->
  scope = {}
  ctrl = {}
  beforeEach module('myStartupApp')
  beforeEach ()->
    @addMatchers
      toEqualData: ( expected )->
        angular.equals @actual, expected

  describe 'ApplicationStarts', ()->
    it 'Should start correctly', ()->
      expect(true).toBe(true)
