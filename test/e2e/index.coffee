describe 'Index', () ->
  beforeEach () ->
    browser().navigateTo('/#/')
  it 'should have a beer', () ->
    expect(element('.icon-beer').count()).toBe(1)
