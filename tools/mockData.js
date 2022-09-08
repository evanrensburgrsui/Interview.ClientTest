const tasks = [
  {
    id: 1,
    description: "Labore et dolore magna aliqua",
    groupId: 1
  },
  {
    id: 2,
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
    groupId: 2
  },
  {
    id: 3,
    description: "Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum",
    groupId: 3
  },
  {
    id: 4,
    description: "Dolore eu fugiat nulla pariatur",
    groupId: 1
  },
  {
    id: 5,
    description: "Excepteur sint occaecat cupidatat non proident",
    groupId: 2
  },
  {
    id: 6,
    description: "Sunt in culpa qui officia deserunt",
    groupId: 2
  },
  {
    id: 7,
    description: "Duis aute irure dolor in reprehenderit in voluptate",
    groupId: 1
  },
  {
    id: 8,
    description: "Aliquip ex ea commodo consequat",
    groupId: 3
  },
  {
    id: 9,
    description: "Sit amet, consectetur adipiscing elit",
    groupId: 3,
    category: "Career",
  },
  {
    id: 10,
    description: "Ugiat nulla pariatur. Excepteur sint occaecat",
    groupId: 2
  },
];

const taskGroups = [
  { id: 1, name: "Important" },
  { id: 2, name: "Low Priority" },
  { id: 3, name: "Back Burner" },
];

const newTask = {
  id: null,
  description: "",
  groupId: null
};

const authenticatedUser = {
  fullName: "Valerie Olson",
  accessToken: "poiuasd3jsf787nb2jhk20.923jwejhwb09poalhqn244939505yakqjqwercn4209asmghopj2r4lkjsrgm9823045jkl.lkj12345oiu",
  accessSeconds: 30
};

module.exports = {
  user: authenticatedUser,
  newTask,
  tasks,
  taskGroups,
};
