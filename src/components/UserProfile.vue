<template>
<div class="user-profile">
    <div class="user-profile_user-panel">
        <h1 class="user-profile_username">@{{ user.username }}</h1>
        <div class="user-profile_admin-badge" v-if='user.isAdmin'>
            #Admin
        </div>
        <div class="user-profile_follower-count">
            <strong>Followers: </strong> {{ followers }}
        </div>
    </div>
    <div class="user-profile_twoots-wrapper">
        <TwootItem v-for='twoot in user.twoots' :key="twoot.id" :username="user.username" :twoot="twoot" @favourite='toggleFavourite' />
    </div>
</div>
</template>

<script>
import TwootItem from './TwootItem';

export default {
    name: 'UserProfile',
    components: {
        TwootItem
    },
    data() {
        return {
            followers: 20,
            user: {
                id: 1,
                username: 'bigtmouthstrks',
                firstName: 'Benjamin',
                lastName: 'Caceres',
                email: 'benjamin.caceres.ra@gmail.com',
                isAdmin: true,
                twoots: [{
                        id: 1,
                        content: 'Todos mis homies ven Friends conmigo los Domingos.'
                    },
                    {
                        id: 2,
                        content: 'Esta página vale cualquier callampa.'
                    },
                    {
                        id: 3,
                        content: 'Esta página vale cualquier callampa 2.'
                    }
                ],
            }
        }
    },
    watch: {
        followers(newFollowerCount, oldFollowerCount) {
            if (oldFollowerCount < newFollowerCount) {
                console.log(`${this.user.username} has gained a follower!`);
            } else {
                if (oldFollowerCount > newFollowerCount) {
                    console.log(`${this.user.username} has lost a follower! :(`);
                }
            }
        }
    },
    computed: {
        fullName() {
            return `${this.user.firstName} ${this.user.lastName}`;
        }
    },
    methods: {
        followUser() {
            this.followers++;
        },
        unfollowUser() {
            this.followers--;
        },
        toggleFavourite(id) {
            console.log(`Favourite twoot #${id}`);
        }
    },
    mounted() {
        this.followUser();
    }
}
</script>

<style>
.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    width: 100%;
    padding: 50px 5%;
}

.user-profile_user-panel {
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #DFE3E8;
}

.user-profile_admin-badge {
    color: white;
    background: red;
    border-radius: 5px;
    margin-right: auto;
    padding: 0px 5px 0px 5px;
}
</style>
