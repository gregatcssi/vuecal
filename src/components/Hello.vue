<!-- src/components/Hello.vue -->
<template>
    <div>
        <div class="greeting">{{name}}{{exclamationMarks}}{{fisYear}}</div>

        <div v-for="weeks in thDates">
            <div v-for="i in weeks">
                {{i.d}}
            </div>
        </div>
         <button @click="generateDates">test dates</button>
          <button @click="increment">increment dates</button>
           <button @click="decrement">decrement dates</button>

        <!-- <table class="col-xs-12">
        <thead>
            <th style="color: rgb(0, 125, 184) ;">QW</th>
            <th style="color: rgb(0, 125, 184) ;">W</th>
            <th>Sa</th>
            <th>Su</th>
            <th>Mo</th>
            <th>Tu</th>
            <th>We</th>
            <th>Th</th>
            <th>Fr</th>
        </thead>
        <tbody>
        </tbody>
        </table> -->
       
    </div>
    
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["name", "initialEnthusiasm", "FiscalYear", "theDates"],
  data() {
    return {
      enthusiasm: this.initialEnthusiasm,
      thDates:this.theDates,
      fisYear:this.FiscalYear
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    },
    generateDates(){
      this.theDates = [];
      let today = new Date(Date.now());
      let startAndEndDates = [
        {
          fisYear: 2019,
          startDate: new Date("2/3/2018"),
          endDate: new Date("2/1/2019")
        },
        {
          fisYear: 2020,
          startDate: new Date("2/2/2019"),
          endDate: new Date("1/31/2020")
        },
        {
          fisYear: 2021,
          startDate: new Date("2/1/2020"),
          endDate: new Date("1/30/2021")
        }
      ];
      let startDate = new Date();
      let endDate = new Date();
      startAndEndDates.forEach(dt => {
        if (dt.startDate <= today && dt.endDate > today) {
          startDate = dt.startDate;
          endDate = dt.endDate;
          this.FiscalYear = dt.fisYear;
        }
      });

      let Incr = 0;
      let week = [];

      let d = today.getDate();
      let m = today.getMonth();
      let y = today.getFullYear();
      let td = d + "/" + m + "/" + y;
      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        Incr++;
        let dd = d.getDate();
        let md = d.getMonth();
        let yd = d.getFullYear();
        let tdd = dd + "/" + md + "/" + yd;
        if (tdd === td) {
          let tmp = { d: d.getDate(), c: "rgb(25, 0, 255)" };
          week.push(tmp);
          console.log(tmp);
        } else {
          let tmp = { d: d.getDate(), c: "rgb(49, 49, 49)" };
          week.push(tmp);
        }
        if (Incr % 7 === 0) {
          this.theDates.push(week);
          console.log(week);
          week = [];
        }
      }
    }
  },

  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
