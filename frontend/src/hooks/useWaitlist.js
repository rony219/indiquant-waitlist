import { useEffect, useState } from "react";
import { getWaitlistDashboard } from "../services/waitlistApi";

export default function useWaitlist() {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    async function loadUser() {
      try {
        // const referralCode =
        //   localStorage.getItem("referralCode");

        // const referralCode =
        // localStorage.getItem("myReferralCode");

// const joined =
// localStorage.getItem("waitlistJoined");

const joined =
sessionStorage.getItem("waitlistJoined");

if (!joined) {
    setLoading(false);
    return;
}

// const referralCode =
// localStorage.getItem("myReferralCode");

const referralCode =
sessionStorage.getItem("myReferralCode");

        if (!referralCode) {
          setLoading(false);
          return;
        }

        const data =
          await getWaitlistDashboard(
            referralCode
          );

        setUser(data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }
    }

    loadUser();
  }, []);

  return {
    user,
    loading,
    error,
  };
}