<template>
  <div class="tw-h-screen tw-w-full tw-bg-black">
    <v-snackbar v-model="snackbar">
      {{ snackbarText }}

      <template v-slot:action="{ attrs }">
        <v-btn color="red" text v-bind="attrs" @click="snackbar = false">
          Close
        </v-btn>
      </template>
    </v-snackbar>
    <div class="tw-flex tw-justify-center tw-items-center tw-h-full">
      <div class="tw-bg-white tw-w-96 tw-rounded-md tw-p-8">
        <h1 class="text-center tw-font-semibold tw-text-2xl tw-mb-6">LOGIN</h1>
        <b-form @submit="login">
          <v-text-field label="Username" v-model="username" required outlined></v-text-field>
          <v-text-field
          v-model="password"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show1 ? 'text' : 'password'"
            @click:append="show1 = !show1"
            required
            outlined
          ></v-text-field>
          <v-select
            :items="items"
            v-model="userType"
            label="User Type"
            required
            outlined
          ></v-select>
          <v-btn block @click="login" x-large color="primary">Login</v-btn>
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: false,
      snackbar: false,
      username: "",
      password: "",
      userType: "",
      snackbarText: "Hello",
      items: ["Patient", "Doctor"],
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
        {
          id: "P13",
          name: "Shreyash Dhande",
          age: 25,
          gender: "Male",
          illness: "Back Pain",
        },
      ],
      doctors: [
        {
          id: "D0",
          name: "Dr. Kr. Rishabh",
          specialization: "Neurology",
          experience: 15,
        },
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
    };
  },
  methods: {
    login() {
        console.log(this.username, this.password, this.userType)
      if (this.userType === 'Patient') {
        console.log(this.username, this.password);
        const patient = this.patients.find(
          (patient) =>
            patient.name === this.username &&
            patient.age === parseInt(this.password)
        );
        console.log(patient)
        if (patient) {
        
          localStorage.setItem("loggedInUser", JSON.stringify(patient));
          this.$router.push("/patientView");
        } else {
          this.resetForm();
          this.displaySnackbar("Invalid credentials for patient.");
        }
      } else if (this.userType === "Doctor") {
        const doctor = this.doctors.find(
          (doctor) =>
            doctor.name === this.username &&
            doctor.experience === parseInt(this.password)
        );
        if (doctor) {
          localStorage.setItem("loggedInUser", JSON.stringify(doctor));
          this.$router.push("/doctorView");
        } else {
          this.resetForm();
          this.displaySnackbar("Invalid credentials for doctor.");
        }
      }
    },
    displaySnackbar(text) {
      this.snackbarText = text;
      this.snackbar = true;
    },
    resetForm() {
      this.username = "";
      this.password = "";
      this.userType = "";
    },
  },
};
</script>