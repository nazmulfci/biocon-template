<script setup>
const ContactData = {
    title:'Contact us',
    titleMassege:'Your Message',
    titledesciption: 'Lorem Ipsum is inting and typesetting in simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the is dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book',
    inputName:'Name',
    inputEmail:'Email',
    inputPhone:'Phone',
    inputSubject:'Subject',
    inputComments:'Comments',
    button:'Send Message',
    Address: 'Office Address',

    addresslist: [
        {name:'Dhaka'},
        {name:'4th Street, Huq_mongil - Rampura_Bansree :1219', url: '#' },
        {name:'Email', url: '#' },
        {name:'Doofazinfo@gmail.com', url: '#' },
        {name:'Phone', url: '#' },
        {name:'01833303296', url: '#' },
    ],

    Timings: 'Timings',
    Timingslist: [
        { name: 'Monday - Friday', url:'#'},
        {name:'09:00 AM - 6:30 PM', url: '#' },
        {name:'Saturday', url: '#' },
        {name:'Closed', url: '#' },
        {name:'Sunday', url: '#' },
        {name:'Closed', url: '#' },
    ],
    connected:'Get connected',
    Desciption:'Lorem ipsumn qersl ioinm sersoe non urna dolor sit amet, consectetur piesn qersl ioinm sersoe non urna dolor aecena',
}
</script>

<template>
    <section id="contact-us">
            <div class="container">
                <h2 class="text-center">{{ ContactData.title }}</h2>

                <hr style="width: 40%;">

                <div class="row">
                    <div class="col-md-6">
                        <h4 class="your-message">{{ ContactData.titleMassege }}</h4>
                        <p class="description_left">{{ ContactData.titledesciption }}</p>

                        <hr class="line_hr">

                        <label for="exampleInputName" class="form-label">{{ ContactData.inputName }}</label>
                        <input type="text" class="form-control" id="exampleInputName" aria-describedby="name"
                            placeholder="Your Name">

                        <div class="row input_phone">
                            <div class="col-md-6 mt-3">
                                <label for="inputEmail4" class="form-label">{{ ContactData.inputEmail }}</label>
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Email Address">
                            </div>
                            <div class="col-md-6">
                                <label for="inputNumber" class="form-label">{{ ContactData.inputEmail }}</label>
                                <input type="text" class="form-control" placeholder="Phone Number">
                            </div>
                        </div>

                        <div class="subject_input">
                            <label for="exampleInputSubject" class="form-label">{{ ContactData.Subject }}</label>
                            <input type="text" class="form-control" id="exampleInputSubject" aria-describedby="name"
                                placeholder="Subject">
                        </div>

                        <div class="form-floating">
                            <label for="exampleInputComments" class="form-label">{{ ContactData.inputComments }}</label>
                            <textarea class="form-control" placeholder="Write Your Message here...."
                                id="floatingTextarea"></textarea>
                        </div>


                        <svg width="0" height="0">
                            <filter id="cloudFilter">
                                <feTurbulence type="fractalNoise" baseFrequency="0.1" num0ctaves="6" />
                                <feDisplacementMap in="SourceGraphic" scale="100" />
                            </filter>
                        </svg>
                        <div class="button btn3">
                            <span>{{ ContactData.button }}</span>
                            <div class="back"></div>
                        </div>

                    </div>

                    <div class="right_contect col-md-6">
                        <div class="row">
                            <div class="col-12">
                                <div class="col-md-6 ">
                                    <h4 class="">{{ ContactData.Address }}</h4>
                                    <ul>
                                        <li v-for="index in ContactData.addresslist" :key="index"> {{ index.name }}</li>
                                    </ul>
                                </div>
                                <div class="Timings col-md-6 ">
                                    <h4 class="">{{ ContactData.Timings }}</h4>
                                    <ul class="">
                                        <li v-for="index in ContactData.Timingslist" :key="index">{{ index.name }}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h3 class="connected">{{ ContactData.connected }}</h3>
                        <p class="description_p">{{ ContactData.Desciption }}</p>

                    </div>
                </div>
            </div>
        </section>
</template>