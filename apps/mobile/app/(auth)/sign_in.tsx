import { useFormContext } from "react-hook-form";
import { SignInForm, SignInFormValues, SignInProps, useAuth } from "shared";
import { ControlledInput } from "../../components/form/ControlledInput";
import {
  Button,
  ButtonLabel,
  Text,
  View,
} from "../../components/ui/design-system";

export default function SignInPage() {
  console.log("SignInPage");

  return (
    <View>
      <SignInForm>
        {({ handleSubmit }) => <Form handleSubmit={handleSubmit} />}
      </SignInForm>
    </View>
  );
}

const Form = ({ handleSubmit }: SignInProps) => {
  const form = useFormContext<SignInFormValues>();
  const { isLoading } = useAuth();

  return (
    <View tw="h-full gap-10 pt-24">
      <View tw="w-full items-center gap-6">
        <Text variant="text-3xl" tw="font-bold">
          Bienvenue !
        </Text>
        <Text tw="italic">Connectez-vous !</Text>
      </View>
      <View tw="gap-4">
        {form.formState.errors.root ? (
          <View tw="p-2 bg-red-100 border-l-2 border-red-600">
            <Text tw="text-red-900">{form.formState.errors.root?.message}</Text>
          </View>
        ) : null}
        <View tw="gap-1">
          <ControlledInput
            control={form.control}
            name="email"
            textContentType="emailAddress"
            keyboardType="email-address"
            label="Email"
            placeholder="Email"
            autoCapitalize="none"
          />
          {form.formState.errors.email ? (
            <Text variant="text-sm" tw="text-red-600">
              {form.formState.errors.email?.message}
            </Text>
          ) : null}
        </View>
        <View tw="gap-1">
          <ControlledInput
            control={form.control}
            name="password"
            textContentType="password"
            secureTextEntry
            label="Mot de passe"
            placeholder="Mot de passe"
          />
          {form.formState.errors.password ? (
            <Text variant="text-sm" tw="text-red-600">
              {form.formState.errors.password?.message}
            </Text>
          ) : null}
        </View>
        <Button variant="primary" onPress={form.handleSubmit(handleSubmit)}>
          <ButtonLabel>Se connecter</ButtonLabel>
        </Button>
      </View>
    </View>
  );
};
