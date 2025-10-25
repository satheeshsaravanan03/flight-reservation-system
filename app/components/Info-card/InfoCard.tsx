import { IInfoCard } from '@/app/utils/interface'
import React from 'react'

interface Props {
  data: IInfoCard;
}

const InfoCard: React.FC<Props>= ({data}) => {

    const Icon = data?.icon;

  return (
    <div>
        <span>
            <Icon />
        </span>
        <div>
            <h3>{data?.title}</h3>
            <span>{data?.description}</span>
        </div>
    </div>
  )
}

export default InfoCard