<template>
    <div class="bg-gray-800 h-screen flex justify-center items-center">
        <div class="max-w-2xl mx-auto gap-4 flex flex-col flex-wrap">
            <div class="mx-auto flex gap-5">
                <button class="bg-green-300 p-2 rounded" @click="signInUser('youremail', 'yourpassword')">
                    Login
                </button>
                <button class="bg-red-300 p-2 rounded" @click="logOutUser">Log Out</button>
            </div>
            <pre class="max-w-2xl whitespace-pre-wrap text-white truncate">{{ user || 'No logged in' }}</pre>
            <pre class="max-w-2xl whitespace-pre-wrap text-white truncate">{{ err || 'No error' }}</pre>
        </div>
    </div>
</template>

<script setup lang="ts">
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const user = useCurrentUser()

const err = ref(null)

const logOutUser = () => {
    const auth = getAuth()
    auth.signOut()
}

const signInUser = async (email: string, password: string) => {
    const auth = getAuth()
    const credentials = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        err.value = errorCode + errorMessage
        console.log(errorCode, errorMessage)

        if (errorCode === 'auth/user-not-found') {
            return 'You are not authorised. Create a user in Firebase'
        }
        if (errorCode === 'auth/wrong-password') {
            return 'Wrong password'
        }
        if (errorCode === 'auth/too-many-requests') {
            return 'Too many requests'
        }
        if (errorCode === 'auth/user-disabled') {
            return 'User disabled'
        }
        if (errorCode === 'auth/invalid-email') {
            return 'Invalid email'
        }
        if (errorCode === 'auth/email-already-in-use') {
            return 'Email already in use'
        }
        if (errorCode === 'auth/invalid-credential') {
            return 'Invalid credential'
        }
    })
    return credentials
}
</script>

<style scoped></style>
