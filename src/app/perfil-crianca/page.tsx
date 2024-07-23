'use client'

import Comments from "@/components/Comments"
import Description from "@/components/Description"
import Header from "@/components/Header"
import InstitutionDescription from "@/components/InstitutionDescription"
import LocationInfo from "@/components/LocationInfo"
import ProfileInfo from "@/components/ProfileInfo"

function ChildProfilePage() {
  return (
    <div className="m-4 min-h-screen">
      <Header />

      <div className="flex flex-col gap-4 w-full">
        <ProfileInfo />
        <LocationInfo />
        <Description />
        <Comments />
        <InstitutionDescription />
      </div>
    </div>
  )
}

export default ChildProfilePage