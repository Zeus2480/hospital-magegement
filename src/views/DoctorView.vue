<template>
  <div class="tw-p-12">
    <v-app-bar absolute color="white" scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="">Ezy Hospitals </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary" @click="logout">logout</v-btn>
    </v-app-bar>
    <h2 class="tw-mt-12">Welcome {{ LoggedUser }}</h2>
    <v-row class="tw-mt-12">
      <v-spacer></v-spacer>
      <v-col
        v-for="patient in patients"
        :key="patient.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-text>
            <div>Patient Number: {{ patient.id }}</div>
            <div>Name: {{ patient.name }}</div>
            <div>Age: {{ patient.age }}</div>
            <div>Gender: {{ patient.gender }}</div>
            <div>Illness: {{ patient.illness }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  created() {
    this.checkLoggedInUser();
  },
  methods: {
    logout() {
      localStorage.removeItem("loggedInUser");
      this.$router.push("/login");
    },
    checkLoggedInUser() {
      const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!loggedInUser) {
        // Redirect to /login
        this.$router.push("/login");
      } else {
        this.LoggedUser = loggedInUser.name;
      }
    },
  },
  data: () => ({
    LoggedUser: "",
    patients: [
      {
        id: "P1",
        name: "John Doe",
        age: 35,
        gender: "Male",
        illness: "Fever",
      },
      {
        id: "P2",
        name: "Jane Smith",
        age: 28,
        gender: "Female",
        illness: "Cough",
      },
      {
        id: "P3",
        name: "Michael Johnson",
        age: 42,
        gender: "Male",
        illness: "Headache",
      },
      {
        id: "P4",
        name: "Emily Davis",
        age: 31,
        gender: "Female",
        illness: "Stomachache",
      },
      {
        id: "P5",
        name: "William Wilson",
        age: 54,
        gender: "Male",
        illness: "Diabetes",
      },
      {
        id: "P6",
        name: "Sophia Brown",
        age: 19,
        gender: "Female",
        illness: "Allergy",
      },
      {
        id: "P7",
        name: "James Anderson",
        age: 47,
        gender: "Male",
        illness: "High Blood Pressure",
      },
      {
        id: "P8",
        name: "Olivia Martinez",
        age: 38,
        gender: "Female",
        illness: "Arthritis",
      },
      {
        id: "P9",
        name: "Daniel Thompson",
        age: 65,
        gender: "Male",
        illness: "Asthma",
      },
      {
        id: "P10",
        name: "Emma Harris",
        age: 25,
        gender: "Female",
        illness: "Depression",
      },
      {
        id: "P11",
        name: "Benjamin Clark",
        age: 32,
        gender: "Male",
        illness: "Migraine",
      },
      {
        id: "P12",
        name: "Ava Lewis",
        age: 44,
        gender: "Female",
        illness: "Back Pain",
      },
    ],
  }),
};
</script>