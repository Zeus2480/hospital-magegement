<template>
  <div class="tw-p-12">
    <v-app-bar absolute color="white" scroll-target="#scrolling-techniques-7">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title class="">Wisdom Hospital</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn color="primary" @click="logout">logout</v-btn>
    </v-app-bar>
    <h2 class="tw-mt-12">Welcome {{ LoggedUser }}</h2>
    <v-row class="tw-mt-12">
      <v-spacer></v-spacer>
      <v-col
        v-for="doctor in doctors"
        :key="doctor.id"
        cols="12"
        sm="6"
        md="4"
      >
        <v-card>
          <v-card-text>
            <div>Doctor ID: {{ doctor.id }}</div>
            <div>Name: {{ doctor.name }}</div>
            <div>Specialization: {{ doctor.specialization }}</div>
            <div>Experience: {{ doctor.experience }} years</div>
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
      }
      else{
        this.LoggedUser = loggedInUser.name;
      }
    },
  },
  data: () => ({
    LoggedUser: "",
    doctors: [
      {
        id: "D1",
        name: "Dr. John Smith",
        specialization: "Cardiology",
        experience: 10,
      },
      {
        id: "D2",
        name: "Dr. Jane Johnson",
        specialization: "Dermatology",
        experience: 8,
      },
      {
        id: "D3",
        name: "Dr. Michael Williams",
        specialization: "Orthopedics",
        experience: 12,
      },
      {
        id: "D4",
        name: "Dr. Emily Davis",
        specialization: "Pediatrics",
        experience: 6,
      },
      {
        id: "D5",
        name: "Dr. William Wilson",
        specialization: "Gynecology",
        experience: 15,
      },
      {
        id: "D6",
        name: "Dr. Sophia Brown",
        specialization: "Neurology",
        experience: 9,
      },
      {
        id: "D7",
        name: "Dr. James Anderson",
        specialization: "Ophthalmology",
        experience: 11,
      },
      {
        id: "D8",
        name: "Dr. Olivia Martinez",
        specialization: "ENT",
        experience: 7,
      },
      {
        id: "D9",
        name: "Dr. Daniel Thompson",
        specialization: "Psychiatry",
        experience: 14,
      },
      {
        id: "D10",
        name: "Dr. Emma Harris",
        specialization: "Dentistry",
        experience: 5,
      },
      {
        id: "D11",
        name: "Dr. Benjamin Clark",
        specialization: "Urology",
        experience: 9,
      },
      {
        id: "D12",
        name: "Dr. Ava Lewis",
        specialization: "General Surgery",
        experience: 13,
      },
    ],
  }),
};
</script>
