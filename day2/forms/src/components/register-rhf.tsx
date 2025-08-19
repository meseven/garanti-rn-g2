import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { FormDataType, resolver } from "./schema";

export function RegisterRHF() {
  const {
    control,
    handleSubmit,
    setError,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver,
  });

  const onSubmit = async (data: FormDataType) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    if (data.email === "mehmet@example.com") {
      return setError("email", {
        type: "manual",
        message: "Email is already taken",
      });
    }

    reset();
    alert(JSON.stringify(data));
  };

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text style={styles.label}>Fullname</Text>
        <Controller
          control={control}
          name="fullname"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your name"
              autoCapitalize="none"
              autoFocus
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />

        {errors.fullname && (
          <Text style={styles.error}>{errors.fullname.message}</Text>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>E-mail address</Text>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your e-mail address"
              autoCapitalize="none"
              keyboardType="email-address"
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.email && (
          <Text style={styles.error}>{errors.email.message}</Text>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Password</Text>
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              autoCapitalize="none"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}
      </View>
      <View style={styles.item}>
        <Text style={styles.label}>Confirm Password</Text>
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder="Retype your password"
              autoCapitalize="none"
              secureTextEntry
              value={field.value}
              onChangeText={field.onChange}
            />
          )}
        />
        {errors.confirmPassword && (
          <Text style={styles.error}>{errors.confirmPassword.message}</Text>
        )}
      </View>

      <Button
        title={isSubmitting ? "Registering..." : "Register"}
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid || isSubmitting}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontSize: 22,
    fontWeight: 500,
  },
  input: {
    padding: 8,
    borderWidth: 1,
    borderColor: "#999",
    fontSize: 22,
    width: "100%",
  },
  error: {
    color: "red",
    fontSize: 18,
  },
});
