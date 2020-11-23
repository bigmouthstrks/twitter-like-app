<template>
    <div class="user-profile">
        <div class="user-profile_sidebar">
            <div class="user-profile_user-panel">
                <h1 class="user-profile_username">@{{ user.username }}</h1>
                <div class="user-profile_admin-badge" v-if='user.isAdmin'>
                    # Admin
                </div>
                <div class="user-profile_follower-count">
                    <strong>Followers: </strong> {{ followers }}
                </div>
            </div>
            <CreateTwootPanel @add-twoot="addTwoot"/>
        </div>
        <div class="user-profile_twoots-wrapper">
            <TwootItem 
                v-for='twoot in user.twoots' 
                :key="twoot.id" 
                :username="user.username" 
                :twoot="twoot" 
            />
        </div>
    </div>
</template>

<script>
import TwootItem from './TwootItem';
import CreateTwootPanel from './CreateTwootPanel';

export default {
    name: 'UserProfile',
    components: { TwootItem, CreateTwootPanel },
    data() {
        return {
            followers: 0,
            user: {
                id: 1,
                username: 'bigmouthstrks',
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
    methods: {
        addTwoot(twoot) {
            this.user.twoots.unshift({ id: this.user.twoots.length + 1, content: twoot })
        },
    }
}
</script>

<style lang="scss" scoped>

.user-profile {
    display: grid;
    grid-template-columns: 1fr 3fr;
    padding: 30px 5%;
    
    .user-profile_sidebar{
        margin-right: 10px;
    }

    .user-profile_user-panel {
        display: flex;
        flex-direction: column;
        padding: 20px;
        background-color: white;
        border-radius: 5px;
        border: 1px solid #DFE3E8;
        margin-bottom: auto;

        h1{
            margin: 0;
        }

        .user-profile_admin-badge {
            color: white;
            background: red;
            border-radius: 5px;
            margin-right: auto;
            padding: 0px 5px 0px 5px;
            font-weight: bold;
        }
    }

    .user-profile_twoots-wraper {
        display: grid;
        grid-gap: 10px;
        margin-bottom: auto;
    }
}

</style>
