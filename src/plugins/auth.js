const auth = {
  install(app, {store, router}) {
    const logOut = async () => {
      await store.dispatch('auth/signOut');
      await router.push('/');
    }

    const auth = async (payload) => {
      await store.dispatch('auth/auth', payload)
      await router.push("/categories");
    }

    app.provide('logOut', logOut).provide('auth', auth);
  }
}

export default auth;