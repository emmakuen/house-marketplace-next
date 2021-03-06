import DeleteIcon from "../public/assets/svg/deleteIcon.svg";
import EditIcon from "../public/assets/svg/editIcon.svg";
import BedIcon from "../public/assets/svg/bedIcon.svg";
import BathtubIcon from "../public/assets/svg/bathtubIcon.svg";
import Link from "next/link";
import Image from "next/image";
import { formatPrice } from "../lib/helpers";

const ListingItem = ({ listing, id, onDelete, onEdit }) => {
  return (
    <li className="listingList">
      <Link
        className="categoryListingLink"
        href={`/category/${listing.type}/${id}`}
        passHref
      >
        <a className="categoryListing">
          <div className="categoryListingImg">
            <Image
              src={listing.imgUrls[0]}
              alt={listing.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="categoryListingDetails">
            <p className="categoryListingLocation">{listing.location}</p>
            <p className="categoryListingName">{listing.name}</p>
            <p className="categoryListingPrice">
              {listing.offer
                ? formatPrice("$", listing.discountedPrice)
                : formatPrice("$", listing.regularPrice)}
              {listing.type === "rent" && "/ Month"}
            </p>
            <div className="categoryListingInfoDiv">
              <BedIcon alt="bed" />
              <p className="categoryListingInfoText">
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} Bedrooms`
                  : `1 Bedroom`}
              </p>
              <BathtubIcon alt="bath" />
              <p className="categoryListingInfoText">
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} Bathrooms`
                  : `1 Bathroom`}
              </p>
            </div>
          </div>
        </a>
      </Link>

      {(onDelete || onEdit) && (
        <div className="icons">
          {onEdit && (
            <EditIcon
              fill="#00cc66"
              height={30}
              width={30}
              onClick={() => onEdit(id)}
            />
          )}
          {onDelete && (
            <DeleteIcon
              fill="#e7463c"
              height={30}
              width={30}
              onClick={() => onDelete(id)}
            />
          )}
        </div>
      )}
    </li>
  );
};

export default ListingItem;
