import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { useSelector } from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';

export default function EventDashboard() {
  // our eventReducer is called event
  // initial state is called events
  const { events } = useSelector((state) => state.event);
  const { loading } = useSelector((state) => state.async);

  return (
    <Grid>
      <Grid.Column width={10}>
        {loading && (
          <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
          </>
        )}
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        {/* without using the key in the EventForm it will lead to not update the props by not rerendring the component */}
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
}
