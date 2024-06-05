import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="battingAverage" source="battingAverage" />
        <TextField label="bestBowling" source="bestBowling" />
        <TextField label="bowlingAverage" source="bowlingAverage" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="economyRate" source="economyRate" />
        <TextField label="Email" source="email" />
        <TextField label="fieldingCatches" source="fieldingCatches" />
        <TextField label="fieldingRunouts" source="fieldingRunouts" />
        <TextField label="fieldingStumpings" source="fieldingStumpings" />
        <TextField label="fifties" source="fifties" />
        <TextField label="First Name" source="firstName" />
        <TextField label="followedUsers" source="followedUsers" />
        <TextField label="followingUsers" source="followingUsers" />
        <TextField label="highestScore" source="highestScore" />
        <TextField label="hundreds" source="hundreds" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="matchesPlayed" source="matchesPlayed" />
        <TextField label="mobileNumber" source="mobileNumber" />
        <TextField label="name" source="name" />
        <TextField label="oversBowled" source="oversBowled" />
        <TextField label="profileImage" source="profileImage" />
        <TextField label="profileStats" source="profileStats" />
        <TextField label="Roles" source="roles" />
        <TextField label="runsConceded" source="runsConceded" />
        <TextField label="totalBallsFaced" source="totalBallsFaced" />
        <TextField label="totalFours" source="totalFours" />
        <TextField label="totalRuns" source="totalRuns" />
        <TextField label="totalSixes" source="totalSixes" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <TextField label="wickets" source="wickets" />
      </Datagrid>
    </List>
  );
};
