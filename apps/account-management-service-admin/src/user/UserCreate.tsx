import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="battingAverage" source="battingAverage" />
        <TextInput label="bestBowling" source="bestBowling" />
        <NumberInput label="bowlingAverage" source="bowlingAverage" />
        <NumberInput label="economyRate" source="economyRate" />
        <TextInput label="Email" source="email" type="email" />
        <NumberInput
          step={1}
          label="fieldingCatches"
          source="fieldingCatches"
        />
        <NumberInput
          step={1}
          label="fieldingRunouts"
          source="fieldingRunouts"
        />
        <NumberInput
          step={1}
          label="fieldingStumpings"
          source="fieldingStumpings"
        />
        <NumberInput step={1} label="fifties" source="fifties" />
        <TextInput label="First Name" source="firstName" />
        <TextInput label="followedUsers" source="followedUsers" />
        <TextInput label="followingUsers" source="followingUsers" />
        <NumberInput step={1} label="highestScore" source="highestScore" />
        <NumberInput step={1} label="hundreds" source="hundreds" />
        <TextInput label="Last Name" source="lastName" />
        <NumberInput step={1} label="matchesPlayed" source="matchesPlayed" />
        <TextInput label="mobileNumber" source="mobileNumber" />
        <TextInput label="name" source="name" />
        <NumberInput label="oversBowled" source="oversBowled" />
        <PasswordInput label="Password" source="password" />
        <div />
        <div />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <NumberInput step={1} label="runsConceded" source="runsConceded" />
        <NumberInput
          step={1}
          label="totalBallsFaced"
          source="totalBallsFaced"
        />
        <NumberInput step={1} label="totalFours" source="totalFours" />
        <NumberInput step={1} label="totalRuns" source="totalRuns" />
        <NumberInput step={1} label="totalSixes" source="totalSixes" />
        <TextInput label="Username" source="username" />
        <NumberInput step={1} label="wickets" source="wickets" />
      </SimpleForm>
    </Create>
  );
};
