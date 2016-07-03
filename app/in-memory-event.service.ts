export class InMemoryEventService {
  createDb() {
    let events = [
      {id: 1, name: 'Event 1', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 2, name: 'Event 2', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 3, name: 'Event 3', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 4, name: 'Event 4', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 5, name: 'Event 5', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 6, name: 'Event 6', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'},
      {id: 7, name: 'Event 7', startDate: '2016-07-02T21:14:42.981Z', endDate:'2016-07-02T21:14:42.981Z', startDate_: '2016-07-02T21:14:42.981Z', endDate_:'2016-07-02T21:14:42.981Z'}
    ];
    return {events};
  }
}