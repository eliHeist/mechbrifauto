<script lang="ts">
    import { contactFormBoolean } from '$lib/stores/booleanStore';

    // Subscribe to the store to use its value
    let get_in_touch = false;
    contactFormBoolean.subscribe(value => {
        get_in_touch = value;
    });

    function toggleContactFormBoolean() {
        contactFormBoolean.update((value) => !value);
    }
</script>

<aside class:collapsed={get_in_touch}>
    <div class="p-8 bg-dark-3 absolute right-0 top-0 bottom-0 content">
        <div class="flex space-x-8 justify-between mb-[2.75rem]">
            <h2>Hey there!</h2>
            <button class="cursor-pointer" on:click={toggleContactFormBoolean}>
                <svg class="w-8" viewBox="0 0 48 48" fill="none">
                    <path d="M24 3C12.3 3 3 12.3 3 24C3 35.7 12.3 45 24 45C35.7 45 45 35.7 45 24C45 12.3 35.7 3 24 3ZM24 42C14.1 42 6 33.9 6 24C6 14.1 14.1 6 24 6C33.9 6 42 14.1 42 24C42 33.9 33.9 42 24 42Z" fill="#DDC0C0"/>
                    <path d="M32.1 34.5L24 26.4L15.9 34.5L13.5 32.1L21.6 24L13.5 15.9L15.9 13.5L24 21.6L32.1 13.5L34.5 15.9L26.4 24L34.5 32.1L32.1 34.5Z" fill="#DDC0C0"/>
                </svg>            
            </button>
        </div>
        <div class="grid mb-[2.75rem]">
            <h3 class="h4">Call Us via these contacts below:</h3>
            <p><a href="tel:+256765219273">+256 76 521 9273</a></p>
            <p>
                <a href="tel:+256759158049">+256 75 915 8049</a>
                <a href="https://wa.me/256759158049">(WhatsApp)</a>
            </p>
        </div>
        <div class="grid mb-[2.75rem]">
            <h3 class="h4">Or Visit Us at this address below:</h3>
            <p>
                Mechbrif Auto Garage <br>Plot 7, Namugongo Kyaliwajjala, <br>Kampala, Uganda
            </p>
            <p>
                <a href="#" class="text-white">(Open in Google Maps)</a>
            </p>
        </div>
        <div class="grid mb-[2.75rem]">
            <h3 class="font-extrabold text-white">These options are valid during these hours: </h3>
            <p>Monday - Saturday, 8 AM - 6 PM</p>
        </div>
        <div class="flex flex-wrap space-x-1 mb-[2.75rem]">
            <h3 class="font-extrabold text-white">Our Email is:</h3>
            <a href="mailto:connect@mechbrifauto.com">connect@mechbrifauto.com</a>
        </div>
    </div>
</aside>

<style lang="scss">
    aside{
        position: fixed;
        inset: 0;
        background-color: rgba(0,0,0,.6);
        z-index: 10;
        transition: all 300ms ease-in-out;

        &.collapsed{
            background-color: rgba(0,0,0,0.0);
            visibility: hidden;

            .content{
                transform: translateX(100%);
            }
        }

        .content{
            overflow-y: auto;
            transform: translateX(0);
            transition: all 300ms ease-in-out;
            
            h2{
                @apply text-dark;
                -webkit-text-stroke: 1px hsl(var(--lead)); 
                font-weight: 800;
                font-size: 2.5rem;
            }
            .h4{
                margin-bottom: 1.25rem;
            }
        }
    }
</style>
